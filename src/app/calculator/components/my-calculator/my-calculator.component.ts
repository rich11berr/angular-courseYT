import { Component } from '@angular/core';

interface CalcGroup {
    first: CalcVar
    second: CalcVar
    operation: CalcOperations;
}

interface CalcVar {
    value: number;
    modificator: CalcModifiers;
}
enum CalcOperations {
    plus = '+',
    minus = '-',
    multiply = '*',
    divide = '/'
}
enum CalcModifiers {
    none = 'none',
    sin = 'sin',
    cos = 'cos',
    square = 'square',
}



@Component({
    selector: 'app-my-calculator',
    templateUrl: './my-calculator.component.html',
    styleUrls: ['./my-calculator.component.scss']
})
export class MyCalculatorComponent {

    public canLeave = false;

    public calcOperations = CalcOperations;

    public calcModifiers = CalcModifiers;

    public calcGroups: CalcGroup[] = [
        {
            first: {
                value: 5,
                modificator: CalcModifiers.none
            },
            second: {
                value: 5,
                modificator: CalcModifiers.none
            },
            operation: CalcOperations.plus
        }
    ]

    public initialCalcGroups = this.calcGroups;

    public history: string[] = [];

    public operationsBetweenGroups: CalcOperations[] = [];

    public result?: number;

    public addGroup(): void {
        this.calcGroups.push({
            first: {
                value: 0,
                modificator: CalcModifiers.none
            },
            second: {
                value: 0,
                modificator: CalcModifiers.none
            },
            operation: CalcOperations.plus
        })

        this.operationsBetweenGroups.push(CalcOperations.plus);
    }

    public removeGroup(index: number): void {
        this.calcGroups.splice(index, 1);
    }

    public calcGroup() {

        let result = 0;

        let tempHistory: string[] = [];

        this.calcGroups.forEach((group, i) => {
            if (i === 0) {
                result = this.calc(this.caclValueWithModif(group.first), this.caclValueWithModif(group.second), group.operation);
            } else {
                let tempResult = this.calc(this.caclValueWithModif(group.first), this.caclValueWithModif(group.second), group.operation);
                result = this.calc(result, tempResult, this.operationsBetweenGroups[i - 1]);
            }
            tempHistory.push(
                `
        (
          ${group.first.modificator !== CalcModifiers.none ? group.first.modificator : ''} ${group.first.value}
          ${group.operation}
          ${group.second.modificator !== CalcModifiers.none ? group.second.modificator : ''} ${group.second.value}
          )
        `)
        })

        tempHistory.push(`= ${result}`);
        this.history.push(tempHistory.join(' '));

        this.result = result;

    }

    public caclValueWithModif(value: CalcVar): number {
        switch (value.modificator) {
            case CalcModifiers.none:
                return value.value;
            case CalcModifiers.cos:
                return Math.cos(value.value);
            case CalcModifiers.sin:
                return Math.sin(value.value);
            case CalcModifiers.square:
                return Math.pow(value.value, 2);
        }
    }

    public calc(first: number, second: number, operation: CalcOperations): number {
        switch (operation) {
            case CalcOperations.plus:
                return first + second;
            case CalcOperations.minus:
                return first - second;
            case CalcOperations.multiply:
                return first * second;
            case CalcOperations.divide:
                return first / second;
        }
    }

}
