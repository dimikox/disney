import React, { useRef } from 'react';
import {Button} from "@chakra-ui/react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import * as XLSX from 'xlsx';

const PieChart = ({ data }) => {
    const chartRef = useRef(null);

    HighchartsExporting(Highcharts);

    const options = {
        chart: {
            type: 'pie',
        },
        title: {
            text: 'Character PIE chart',
        },
        tooltip: {
            formatter: function() {
                const tvShows = this.point.tvShows;
                const tvShowsContent = tvShows.map(show => `<li>${show}</li>`).join(', ');
                return 'Number of TV Shows: ' + this.y + '<br>' + 'Percentage: ' + this.point.percentage.toFixed(1) + '% <br>' + tvShowsContent;
            }
        },
        subtitle: {
            text:
                'Each section of the chart shows the number of movies each character participates in.',
        },
        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [
                    {
                        enabled: true,
                        distance: 20,
                    },
                    {
                        enabled: true,
                        distance: -40,
                        format: '{point.y}',
                        style: {
                            fontSize: '.8em',
                            textOutline: 'none',
                            opacity: 0.7,
                        },
                    },
                ],
            },
        },
        series: [
            {
                name: data && data.tvShows
                    ? data.tvShows.map(show => <span>{show}</span>)
                    : [],
                colorByPoint: true,
                data: data,
            },
        ],
    };

    const exportToXLSX = () => {
        const chart = chartRef.current.chart;

        if (chart) {
            const exportData = data.map(point => ({
                Name: point.name,
                Percentage: point.y,
                TV_Shows: point.tvShows.join(', '),
            }));
            const ws = XLSX.utils.json_to_sheet(exportData);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'PieChart_Data');
            XLSX.writeFile(wb, 'pie_chart_data.xlsx');
        }
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />
            <Button mt="5" onClick={exportToXLSX}>Export to XLSX</Button>
        </div>
    );
}

export default PieChart;
