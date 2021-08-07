import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AboutComponent } from './about/about.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { VibrationComponent } from './technologies/vibration/vibration.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { DemoFrameComponent } from './demo-frame/demo-frame.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GeolocationComponent } from './technologies/sensors/geolocation/geolocation.component';
import { NotificationComponent } from './technologies/notification/notification.component';
import { WebAppManifestComponent } from './technologies/web-app-manifest/web-app-manifest.component';
import { ServiceWorkerComponent } from './technologies/service-worker/service-worker.component';
import { OrientationSensorComponent } from './technologies/sensors/orientation-sensor/orientation-sensor.component';
import {MatTabsModule} from '@angular/material/tabs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './dashboard/category/category.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DisplayFeatureDetectionsComponent } from './display-feature-detections/display-feature-detections.component';
import {DeviceorientationEventComponent} from './technologies/sensors/deviceorientation-event/deviceorientation-event.component';
import {AccelerometerComponent} from './technologies/sensors/accelerometer/accelerometer.component';
import {AmbientLightSensorComponent} from './technologies/sensors/ambient-light-sensor/ambient-light-sensor.component';
import { GeolocationSensorComponent } from './technologies/sensors/geolocation-sensor/geolocation-sensor.component';
import { GyroscopeComponent } from './technologies/sensors/gyroscope/gyroscope.component';
import { MagnetometerComponent } from './technologies/sensors/magnetometer/magnetometer.component';
import { ProximitySensorComponent } from './technologies/sensors/proximity-sensor/proximity-sensor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    DemoFrameComponent,
    DashboardComponent,
    CategoryComponent,
    DisplayFeatureDetectionsComponent,
    // TECHNOLOGIES
    AccelerometerComponent,
    AmbientLightSensorComponent,
    DeviceorientationEventComponent,
    GeolocationComponent,
    GeolocationSensorComponent,
    GyroscopeComponent,
    MagnetometerComponent,
    OrientationSensorComponent,
    ProximitySensorComponent,
    //
    NotificationComponent,
    ServiceWorkerComponent,
    VibrationComponent,
    WebAppManifestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatSnackBarModule,
    MatTabsModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
