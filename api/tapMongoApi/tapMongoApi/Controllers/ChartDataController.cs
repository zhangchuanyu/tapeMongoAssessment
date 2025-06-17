

namespace tapMongoApi.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    [ApiController]
    [Route("[controller]")]
    public class ChartDataController : ControllerBase
    {
        private readonly ILogger<ChartDataController> _logger;

        public ChartDataController(ILogger<ChartDataController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "/api/")]
        public ChartResponse Get()
        {
            var result = new ChartResponse { MonthlyDate = new List<ChartDataObject>() };

            result.MonthlyDate.Add(new ChartDataObject { Month = DateTime.Parse("2025-01"), AllCustomers = 18.3, loyaltyCustomers =  24.9 });

            return result;
        }
    }
}
