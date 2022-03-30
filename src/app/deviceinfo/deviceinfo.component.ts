import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deviceinfo',
  templateUrl: './deviceinfo.component.html',
  styleUrls: ['./deviceinfo.component.css'],
})
export class DeviceinfoComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.http.post('http://mdm.oasyscybernetics.in:9090/GetDeviceInfoUI');
  }
}
