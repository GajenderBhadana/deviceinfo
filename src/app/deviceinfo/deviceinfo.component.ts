import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Posts } from '../classes/posts';

@Component({
  selector: 'app-deviceinfo',
  templateUrl: './deviceinfo.component.html',
  styleUrls: ['./deviceinfo.component.css'],
})
export class DeviceinfoComponent implements OnInit {
  objPosts: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    var opost = new Posts();
    opost.device_id = 'TEG9300MTOC07709';
    opost.created_dt = '11-03-2022 10:43:15';
    opost.device_IMEI = 'No detected sim';
    opost.device_battery_level = '36';
    opost.device_external_storage = null;
    opost.device_internal_storage = '6 GB';
    opost.device_manufacturer = 'OASYS';
    opost.device_model = 'TEG9300-M';
    opost.device_os_version = '9';
    opost.device_ram = '1.83 GB';
    opost.device_sim_no = 'No detected sim';
    opost.device_sno = 'TEG9300MTOC07709';
    opost.device_storage_used = '2 GB';
    opost.device_temprature = undefined;
    opost.minute_diff = 27464;

    this.http
      .post('http://mdm.oasyscybernetics.in:9090/GetDeviceInfoUI', opost)
      .subscribe((data) => {
        this.objPosts = data;
        console.log(data);
      });
  }
}
