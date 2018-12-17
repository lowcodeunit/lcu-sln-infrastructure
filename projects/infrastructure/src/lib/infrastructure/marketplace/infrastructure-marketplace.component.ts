import { Component, Injector } from '@angular/core';
import { ForgeGenericSolution, ISolutionControl } from '@lcu/solutions';

@Component({
	selector: 'forge-solution-infrastructure-marketplace',
	templateUrl: './infrastructure-marketplace.component.html',
	styleUrls: ['./infrastructure-marketplace.component.scss']
})
export class ForgeInfrastructureSolutionMarketplace extends ForgeGenericSolution
	implements ISolutionControl {
	//  Fields

	//  Properties

	//  Constructors
	constructor(protected injector: Injector) {
		super(injector);
	}
	//	Life Cycle

	//	API Methods

	//	Helpers
}
