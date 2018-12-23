import { Component, Injector } from '@angular/core';
import { ISolutionControl, ForgeGenericSolution } from '@lcu/solutions';

@Component({
	selector: 'forge-solution-infrastructure-documentation',
	templateUrl: './infrastructure-documentation.component.html',
	styleUrls: ['./infrastructure-documentation.component.scss']
})
export class ForgeInfrastructureSolutionDocumentation extends ForgeGenericSolution
	implements ISolutionControl {
	//  Fields

	//  Properties
	public DocsRoot: string;

	//  Constructors
	constructor(protected injector: Injector) {
		super(injector);

		this.DocsRoot = 'https://raw.githubusercontent.com/lowcodeunit/lcu-sln-infrastructure/master/docs/';
	}

	//	Life Cycle

	//	API Methods

	//	Helpers
}
