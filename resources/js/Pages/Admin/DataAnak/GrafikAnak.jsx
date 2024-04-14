import React from 'react'
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import Highcharts from "highcharts";
// Aktifkan modul ekspor
HighchartsExporting(Highcharts);
// Aktifkan modul aksesibilitas jika diperlukan
HighchartsAccessibility(Highcharts);
export default function GrafikAnak({darah, usia, jumlahKelamin}){
    const golonganChartPie = {
	        chart: {
	            type: "pie",
	        },
	        title: {
	            text: "Golongan Darah",
	        },
	        subtitle: {
	            text: "Statistik Jumlah Golongan Darah Anak",
	        },
	        accessibility: {
	            enabled: true,
	        },

	        legend: {
	            // Konfigurasi legend
	            align: "center",
	            verticalAlign: "bottom",
	            layout: "horizontal",
	        },

	        buttonOptions: {
	            align: "right",
	            buttonSpacing: 3,
	            enabled: true,
	            height: 28,
	            symbolFill: "#666666",
	            symbolSize: 14,
	            symbolStroke: "#666666",
	            symbolStrokeWidth: 3,
	            symbolX: 14.5,
	            symbolY: 13.5,
	            text: null,
	        },
	        navigation: {
	            buttonOptions: {
	                enabled: true, // Mengaktifkan tombol navigasi
	            },
	        },
	        plotOptions: {
	            series: {
	                dataLabels: {
	                    enabled: true,
	                    format: "{point.name}: {point.y:f}",
	                },
	            },
	            pie: {
	                allowPointSelect: true,
	                cursor: "pointer",
	                showInLegend: true,
	            },
	        },

	        tooltip: {
	            headerFormat:
	                '<span style="font-size:11px">{series.name}</span><br>',
	            pointFormat:
	                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:f}</b><br/>',
	        },
	        series: [
	            {
	                name: "Golongan Darah",
	                colorByPoint: true,
	                shadow: 1,
	                border: 1,
	                data: darah
	                    ? darah.map((item) => ({
	                          name: item.name,
	                          y: item.y,
	                      }))
	                    : [], // Pastikan untuk menangani jika data.agama masih kosong
	            },
	        ],
    };
     const UsiaChartPie = {
	        chart: {
	            type: "pie",
	        },
	        title: {
	            text: "Usia Anak Laki-Laki",
	        },
	        subtitle: {
	            text: "Statistik Jumlah Usia Anak Laki-Laki",
	        },
	        accessibility: {
	            enabled: true,
	        },

	        legend: {
	            // Konfigurasi legend
	            align: "center",
	            verticalAlign: "bottom",
	            layout: "horizontal",
	        },

	        buttonOptions: {
	            align: "right",
	            buttonSpacing: 3,
	            enabled: true,
	            height: 28,
	            symbolFill: "#666666",
	            symbolSize: 14,
	            symbolStroke: "#666666",
	            symbolStrokeWidth: 3,
	            symbolX: 14.5,
	            symbolY: 13.5,
	            text: null,
	        },
	        navigation: {
	            buttonOptions: {
	                enabled: true, // Mengaktifkan tombol navigasi
	            },
	        },
	        plotOptions: {
	            series: {
	                dataLabels: {
	                    enabled: true,
	                    format: "{point.name}: {point.y:f}",
	                },
	            },
	            pie: {
	                allowPointSelect: true,
	                cursor: "pointer",
	                showInLegend: true,
	            },
	        },

	        tooltip: {
	            headerFormat:
	                '<span style="font-size:11px">{series.name}</span><br>',
	            pointFormat:
	                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:f}</b><br/>',
	        },
	        series: [
	            {
	                name: "Statistik Usia Laki-Laki",
	                colorByPoint: true,
	                shadow: 1,
	                border: 1,
	                data: usia
	                    ? usia.laki_laki.map((item, key) => ({
	                          name:usia.kategori[key],
	                          y: item,
	                      }))
	                    : [], // Pastikan untuk menangani jika data.agama masih kosong
	            },
	        ],
    };
    const UsiaPerempuanChartPie = {
	        chart: {
	            type: "pie",
	        },
	        title: {
	            text: "Usia Anak Perempuan",
	        },
	        subtitle: {
	            text: "Statistik Jumlah Usia Anak Perempuan",
	        },
	        accessibility: {
	            enabled: true,
	        },

	        legend: {
	            // Konfigurasi legend
	            align: "center",
	            verticalAlign: "bottom",
	            layout: "horizontal",
	        },

	        buttonOptions: {
	            align: "right",
	            buttonSpacing: 3,
	            enabled: true,
	            height: 28,
	            symbolFill: "#666666",
	            symbolSize: 14,
	            symbolStroke: "#666666",
	            symbolStrokeWidth: 3,
	            symbolX: 14.5,
	            symbolY: 13.5,
	            text: null,
	        },
	        navigation: {
	            buttonOptions: {
	                enabled: true, // Mengaktifkan tombol navigasi
	            },
	        },
	        plotOptions: {
	            series: {
	                dataLabels: {
	                    enabled: true,
	                    format: "{point.name}: {point.y:f}",
	                },
	            },
	            pie: {
	                allowPointSelect: true,
	                cursor: "pointer",
	                showInLegend: true,
	            },
	        },

	        tooltip: {
	            headerFormat:
	                '<span style="font-size:11px">{series.name}</span><br>',
	            pointFormat:
	                '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:f}</b><br/>',
	        },
	        series: [
	            {
	                name: "Statistik Usia Perempuan",
	                colorByPoint: true,
	                shadow: 1,
	                border: 1,
	                data: usia
	                    ? usia.perempuan.map((item, key) => ({
	                          name:usia.kategori[key],
	                          y: item,
	                      }))
	                    : [], // Pastikan untuk menangani jika data.agama masih kosong
	            },
	        ],
    };
    const allUsia = {
	       
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Statistik Usia Anak Terdaftar'
    },
    subtitle: {
        text: 'Statistik Usia Anak'
    },
    xAxis: {
        categories: usia.kategori
    },
    yAxis: {
        title: {
            text: 'Jumlah Anak'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Laki-Laki',
        data: usia.laki_laki
    }, {
        name: 'Perempuan',
        data: usia.perempuan
    }]
    };
    const statJenkel = {
    	
    chart: {
        type: 'column'
    },
    title: {
        text: 'Jumlah Jenis Kelamin Anak',
        align: 'left'
    },
 
    xAxis: {
        categories: ['Laki-Laki','Perempuan'],
        crosshair: true,
        accessibility: {
            description: 'Jumlah'
        }
    },
     yAxis: {
        min: 0,
        title: {
            text: 'Statistik Jenis Kelamin Anak'
        }
    },

    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
    		{name:"Jenis Kelamin",
    		    		    colorByPoint: true,
    			                shadow: 1,
    			                border: 1,
    			                data: jumlahKelamin.map((item, key) => ({name:item.kategori, y:item.jumlah}))}
    	]

    }
    console.log(jumlahKelamin[0])
	return (
		<div>
		<div className='grid grid-cols-1 md:grid-cols-2 items-center gap-3 my-2'>
		<div className='rounded-md overflow-hidden'>
			 <HighchartsReact
                highcharts={Highcharts}
                options={statJenkel}
            />
            </div>
		<div className='rounded-md overflow-hidden'>
			 <HighchartsReact
                highcharts={Highcharts}
                options={golonganChartPie}
            />
            </div>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-3 my-2'>
           	 <div className='rounded-md overflow-hidden'>
           	 	<HighchartsReact
                highcharts={Highcharts}
                options={UsiaChartPie}
            />
           	 </div>
       	 	<div className='rounded-md overflow-hidden'>
	            <HighchartsReact
	                highcharts={Highcharts}
	                options={UsiaPerempuanChartPie}
	            />
            </div>
           </div>
           <div className='rounded-md overflow-hidden'>
	            <HighchartsReact
	                highcharts={Highcharts}
	                options={allUsia}
	            />
            </div>
		</div>
		)
}