import {
  Component,
  NgZone,
  OnInit,
  OnDestroy,
  Input,
  SimpleChanges,
} from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { parseISO, subMonths, endOfMonth, startOfMonth } from 'date-fns';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-chart',
  templateUrl: './chart.component.html',
})
export class ChartComponent implements OnInit, OnDestroy {
  private root!: am5.Root;
  selectedRange = 'lastMonth';
  @Input() chartData: any = {};
  isDataLoaded = false;
  constructor(private zone: NgZone) {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['chartData'] && this.chartData?.monthlyData) {
      this.isDataLoaded = true;
      this.renderChart();
    }
  }
  getAggregatedData(range: string) {
    if (!this.chartData?.monthlyData) return [];

    const monthlyData = this.chartData.monthlyData;
    const today = new Date();

    let startDate: Date;
    let endDate = endOfMonth(subMonths(today, 1)); // Default: end of last month

    switch (range) {
      case 'lastMonth':
        startDate = startOfMonth(subMonths(today, 1));
        endDate = endOfMonth(subMonths(today, 1));
        break;
      case 'lastQuarter':
        startDate = startOfMonth(subMonths(today, 3));
        endDate = endOfMonth(subMonths(today, 1));
        break;
      case 'lastYear':
        startDate = startOfMonth(subMonths(today, 12));
        endDate = endOfMonth(subMonths(today, 1));
        break;
      case 'custom':
        //  can be changed to user input
        startDate = startOfMonth(subMonths(today, 6));
        endDate = endOfMonth(subMonths(today, 1));
        break;
      default:
        return [];
    }

    const filtered = monthlyData.filter((d: any) => {
      const monthDate = parseISO(d.month + '-01');
      return monthDate >= startDate && monthDate <= endDate;
    });

    if (filtered.length === 0) return [];

    const allCustomersTotal = filtered.reduce(
      (sum: number, d: { allCustomers: number }) => sum + d.allCustomers,
      0
    );
    const loyaltyCustomersTotal = filtered.reduce(
      (sum: number, d: { loyaltyCustomers: number }) =>
        sum + d.loyaltyCustomers,
      0
    );

    return [
      // Note: toFixed(2) is used to ensure two decimal places
      {
        category: 'All Customers',
        value: parseFloat(allCustomersTotal.toFixed(2)),
      },
      {
        category: 'Loyalty Customers',
        value: parseFloat(loyaltyCustomersTotal.toFixed(2)),
      },
    ];
  }

  renderChart(): void {
    this.zone.runOutsideAngular(() => {
      if (this.root) this.root.dispose();

      this.root = am5.Root.new('chartdiv');

      this.root.setThemes([am5themes_Animated.new(this.root)]);

      const chart = this.root.container.children.push(
        am5xy.XYChart.new(this.root, {
          panX: true,
          panY: false,
          wheelX: 'panX',
          wheelY: 'zoomX',
          pinchZoomX: true,
        })
      );

      const xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(this.root, {
          categoryField: 'category',
          renderer: am5xy.AxisRendererX.new(this.root, { minGridDistance: 30 }),
        })
      );

      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(this.root, {
          renderer: am5xy.AxisRendererY.new(this.root, {}),
        })
      );

      const series = chart.series.push(
        am5xy.ColumnSeries.new(this.root, {
          name: 'Revenue',
          xAxis,
          yAxis,
          valueYField: 'value',
          categoryXField: 'category',
        })
      );

      series.columns.template.setAll({
        tooltipText: '{category}: ${valueY}',
        width: am5.percent(60),
        cornerRadiusTL: 5,
        cornerRadiusTR: 5,
      });
      series.columns.template.adapters.add('fill', (fill, target) => {
        const dataItem = target.dataItem;
        if (!dataItem) {
          return fill;
        }
        const dataContext = dataItem.dataContext as { category: string };
        switch (dataContext.category) {
          case 'All Customers':
            return am5.color(0x4f46e5); // Indigo
          case 'Loyalty Customers':
            return am5.color(0x10b981); // Emerald
          default:
            return fill;
        }
      });
      const data = this.getAggregatedData(this.selectedRange);
      if (data.length === 0) {
        console.warn(
          'No data available for the selected range:',
          this.selectedRange
        );
        return;
      }
      xAxis.data.setAll(data);
      series.data.setAll(data);

      chart.set(
        'scrollbarX',
        am5.Scrollbar.new(this.root, { orientation: 'horizontal' })
      );
    });
  }
  onDateRangeChange() {
    if (this.isDataLoaded) {
      this.renderChart();
    }
  }
  ngOnDestroy(): void {
    this.root?.dispose();
  }
}
