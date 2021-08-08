import { Component } from '@angular/core';
import {
  CAM_MIC_CAPTURE,
  Category,
  DEVICE_INFOS,
  FURTHER_HARDWARE_AND_PERIPHERAL, FURTHER_PLATFORM,
  INPUT_OUTPUT_DEVICES,
  INPUT_PROCESSING, LOCAL_RESOURCES, PLATFORM_UI,
  SCREEN,
  SENSORS
} from './category/category';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  categories: Category[] = [
    SENSORS,
    DEVICE_INFOS,
    SCREEN,
    CAM_MIC_CAPTURE,
    INPUT_OUTPUT_DEVICES,
    INPUT_PROCESSING,
    FURTHER_HARDWARE_AND_PERIPHERAL,
    LOCAL_RESOURCES,
    PLATFORM_UI,
    FURTHER_PLATFORM
  ];
}
