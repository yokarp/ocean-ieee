import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  data: any;
  dataTwo: any;
  dataThree: any;
  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.data = {
          labels: ['12:00','12:10','12:20','12:30','12:40','12:50','13:00','13:10','13:20','13:30','13:40','13:50',
                   '14:00','14:10','14:20','14:30','14:40','14:50','15:00','15:10','15:20','15:30','15:40','15:50',
                   '16:00','16:10','16:20','16:30','16:40','16:50','17:00','17:10','17:20','17:30','17:40','17:50',
                   '18:00','18:10','18:20','18:30','18:40','18:50','19:00','19:10','19:20','19:30','19:40','19:50','20:00',
          ],
          datasets: [
              {
                  label: 'Temperatura',
                  data: [19,24,22,12,23,15,13,19,20,20,22,24,13,24,20,25,13,20,12,23,24,17,12,24,22,23,14,15,24,22,14,17,19
                        ,24,23,12,21,15,14,16,12,23,23,20,19,20,13,20,16
                  ],
                  fill: false,
                  borderColor: documentStyle.getPropertyValue('--yellow-500'),
                  tension: 0.4
              }
          ]
      };

      this.dataTwo = {
        labels: ['12:00','12:10','12:20','12:30','12:40','12:50','13:00','13:10','13:20','13:30','13:40','13:50',
                 '14:00','14:10','14:20','14:30','14:40','14:50','15:00','15:10','15:20','15:30','15:40','15:50',
                 '16:00','16:10','16:20','16:30','16:40','16:50','17:00','17:10','17:20','17:30','17:40','17:50',
                 '18:00','18:10','18:20','18:30','18:40','18:50','19:00','19:10','19:20','19:30','19:40','19:50','20:00',
        ],
        datasets: [
            {
                label: 'Conductividad',
                data: [2027,2766,2101,2992,1821,3212,1917,2575,3068,3100,1637,3278,2715,1825,1813,3387,2001,2756,2762,2176,
                       1581,3028,1979,3383,2291,1962,2840,2441,2796,1966,2645,2943,2229,2043,2479,1635,3142,1970,1712,2344,1900,
                       1977,1552,3363,3081,1681,1526,2734,1516,
                ],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                tension: 0.4
            }
        ]
        };
        this.dataThree = {
            labels: ['12:00','12:10','12:20','12:30','12:40','12:50','13:00','13:10','13:20','13:30','13:40','13:50',
                     '14:00','14:10','14:20','14:30','14:40','14:50','15:00','15:10','15:20','15:30','15:40','15:50',
                     '16:00','16:10','16:20','16:30','16:40','16:50','17:00','17:10','17:20','17:30','17:40','17:50',
                     '18:00','18:10','18:20','18:30','18:40','18:50','19:00','19:10','19:20','19:30','19:40','19:50','20:00',
            ],
            datasets: [
                {
                    label: 'Turbidez',
                    data: [4,3,2,2,4,2,2,2,2,3,2,3,4,3,4,3,4,4,4,2,2,2,2,4,2,3,4,4,4,4,4,4,3,2,4,4,4,3,2,3,4,3,4,3,4,4,4,3,4,],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--red-500'),
                    tension: 0.4
                }
            ]
        };

      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.6,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };
  }
}
