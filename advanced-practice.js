var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here

  output = {};

  for (var i in salesData) {
    var salesSum = salesData[i].sales.reduce(function(a, b) {
      return a + b;
    }, 0);

    if (!(salesData[i].name in output)) {
      output[salesData[i]['name']] = {};
    }

    // TotalSales
    if (!('totalSales' in output[salesData[i]['name']])) {
      output[salesData[i]['name']]['totalSales'] = 0;
    }
    output[salesData[i]['name']]['totalSales'] += salesSum;
    //

    //TotalTaxes
    if (!('totalTaxes' in output[salesData[i]['name']])) {
      output[salesData[i]['name']]['totalTaxes'] = 0;
    }
    //
    output[salesData[i]['name']]['totalTaxes'] += salesSum * taxRates[salesData[i].province];
  }
  console.log(output);
};

calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300,
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/