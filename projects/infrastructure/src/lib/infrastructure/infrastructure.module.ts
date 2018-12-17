import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatListModule, MatToolbarModule, MatIconModule, MatSelectModule, MatCheckboxModule, MatSlideToggleModule, MatButtonModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule } from '@lcu/hosting';
import { BaseSolutionModule } from '@lcu/solutions';
import { ForgeInfrastructureSolutionManage } from './manage/infrastructure-manage.component';
import { ForgeInfrastructureSolutionDocumentation } from './documentation/infrastructure-documentation.component';
import { ForgeInfrastructureSolutionHeading } from './heading/infrastructure-heading.component';
import { ForgeInfrastructureSolutionMarketplace } from './marketplace/infrastructure-marketplace.component';
import { ForgeInfrastructureSolutionOverview } from './overview/infrastructure-overview.component';
import { ReactiveFormsModule } from '@angular/forms';


export class ForgeInfrastructureSolutionDisplayModule extends BaseSolutionModule {
	public Documentation() {
		return ForgeInfrastructureSolutionDocumentation;
	}

	public Heading() {
		return ForgeInfrastructureSolutionHeading;
	}

	public Manage() {
		return ForgeInfrastructureSolutionManage;
	}

	public Marketplace() {
		return ForgeInfrastructureSolutionMarketplace;
	}

	public Overview() { 
		return ForgeInfrastructureSolutionOverview;
	}
}

var comps = [
	ForgeInfrastructureSolutionDocumentation,
	ForgeInfrastructureSolutionHeading,
	ForgeInfrastructureSolutionManage,
	ForgeInfrastructureSolutionMarketplace,
	ForgeInfrastructureSolutionOverview,
];

@NgModule({
	imports: [
		FathymSharedModule,
        ReactiveFormsModule,
		FlexLayoutModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatSlideToggleModule,
        MatToolbarModule,
	],
	declarations: [
		...comps,
	],
	exports: [
		...comps,
	],
	entryComponents: [
		...comps,
	]
})
export class ForgeInfrastructureSolutionModule { 
}
