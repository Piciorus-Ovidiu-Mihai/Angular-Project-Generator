import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-mat-input-counter',
	templateUrl: './mat-input-counter.component.html',
	styleUrls: ['./mat-input-counter.component.scss'],
})
export class MatInputCounterComponent {
	myFormGroup = new FormGroup({
		formField: new FormControl(),
	});

	_value: number = 0;
	_step: number = 1;
	_min: number = 0;
	_max: number = Infinity;
	_wrap: boolean = false;
	color: string = 'default';
	@Output() valueChange = new EventEmitter<number>();

	@Input('value')
	set inputValue(_value: number) {
		this._value = this.parseNumber(_value);
	}

	@Input()
	set step(_step: number) {
		this._step = this.parseNumber(_step);
	}

	@Input()
	set min(_min: number) {
		this._min = this.parseNumber(_min);
	}

	@Input()
	set max(_max: number) {
		this._max = this.parseNumber(_max);
	}

	@Input()
	set wrap(_wrap: boolean) {
		this._wrap = this.parseBoolean(_wrap);
	}

	protected parseNumber(num: any): number {
		return +num;
	}

	protected parseBoolean(bool: any): boolean {
		return !!bool;
	}

	setColor(color: string): void {
		this.color = color;
	}

	getColor(): string {
		return this.color;
	}

	incrementValue(step: number = 1): void {
		let inputValue = this._value + step;

		if (this._wrap) {
			inputValue = this.wrappedValue(inputValue);
		}

		this._value = inputValue;


    this.propagateValue();
	}

	protected wrappedValue(inputValue): number {
		if (inputValue > this._max) {
			return this._min + inputValue - this._max;
		}

		if (inputValue < this._min) {
			if (this._max === Infinity) {
				return 0;
			}

			return this._max + inputValue;
		}

		return inputValue;
	}

	shouldDisableDecrement(inputValue: number): boolean {
		return !this._wrap && inputValue <= this._min;
	}

	shouldDisableIncrement(inputValue: number): boolean {
		return !this._wrap && inputValue >= this._max;
	}

	propagateValue() {
		this.valueChange.emit(this._value);
	}
}
