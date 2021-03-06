import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from "ng-zorro-antd/message";
import { ComponentRegister,BaseSettingComponent } from "epsgis";
@ComponentRegister({
  uri:"app-equery-setting",
  path:"/projects/epsplanet/components/equery/setting",
  name:"EquerySettingComponent"
})
@Component({
  selector: "app-equery-setting",
  templateUrl: "./equery-setting.component.html",
  styleUrls: ["./equery-setting.component.scss"]
})
export class EquerySettingComponent  extends BaseSettingComponent {
validateForm!: FormGroup;
  constructor(private fb: FormBuilder, private message: NzMessageService) {
    super();
  }

  ngOnInit(): void {
    /*
    * 这是样例代码，this.configJson为组件config.json中的数据
    this.validateForm = this.fb.group({
      name: [this.configJson?.name, [Validators.required]],
      url: [this.configJson?.url, [Validators.required]]
    })
    */
    super.ngOnInit();
  }
  ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }
  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
  /**
   * 保存出错时会执行此函数
   * @param error 
   */
  onSaveError(error: Error) {
    this.message.error(error.message);
  }
  /**
   * 保存前会执行此函数获取将要保存的数据
   * @returns 返回验证信息以及json数据
   */
  getValidateResult() {
    //该函数用于表单验证
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.setValidateResult(true, "", this.validateForm.value);
    } else {
      this.setValidateResult(false, "错误信息");
    }
    return super.getValidateResult();
  }
}