import { Component, Injector } from '@angular/core';
import { ISolutionControl, ForgeGenericSolution } from '@lcu/solutions';
import { isStatusSuccess } from '@lcu/common';
import { Loading } from '@lcu/core';
import { ProvisioningConfig } from '@lcu/apps';
import { ProvisioningConfigContext, PageUIService } from '@lcu/daf-common';
import { FormBuilder } from '@angular/forms';


@Component({
    selector: 'forge-solution-infrastructure-manage',
    templateUrl: './infrastructure-manage.component.html',
    styleUrls: ['./infrastructure-manage.component.scss']
})
export class ForgeInfrastructureSolutionManage extends ForgeGenericSolution
    implements ISolutionControl {
    //  Fields

    //  Properties
    public Loading: Loading;

    public ProvisioningConfig: ProvisioningConfig;

    //  Constructors
    constructor(protected provisioningConfig: ProvisioningConfigContext,
        protected pgUiSvc: PageUIService, protected formBldr: FormBuilder, protected injector: Injector) {
        super(injector);

        this.Loading = new Loading();
    }

    //	Life Cycle
    public ngOnInit() {
        super.ngOnInit();

        this.provisioningConfig.Loading.subscribe(loading => this.Loading.Set(loading));

        this.provisioningConfig.Context.subscribe(provisioningConfig => this.ProvisioningConfig = provisioningConfig);
    }


    //	API Methods
    public Save() {
        this.Loading.Set(true);

        this.provisioningConfig.Save(this.ProvisioningConfig).subscribe(
            (status) => {
                if (isStatusSuccess(status)) {
                    this.pgUiSvc.Notify.Signal("Provisioning Configuration saved successfully");
                } else {
                    console.log(status);

                    this.pgUiSvc.Notify.Signal(status.Message);
                }
            },
            (err) => {
                console.log(err);

                this.pgUiSvc.Notify.Signal("Unknown error. Please try again, or contact support if the problem continues");
            },
            () => {
                this.Loading.Set(false);
            });
    }

    //	Helpers
}   
