import { Component, signal } from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ChartComponent],
  template: ` <h1 class="text-center">Customer Revenue Comparison</h1>
    <app-chart [chartData]="chartData"></app-chart>`,
})
export class AppComponent {
  chartData: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Load the chart data from the JSON file, includes 3 data sets:chart-data1, chart-data2, chart-data3.
    this.http.get('/assets/chart-data2.json').subscribe((data) => {
      this.chartData = data;
    });
  }
}
