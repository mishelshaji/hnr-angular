import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-input-field',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    }
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent implements ControlValueAccessor {

    value: string | null = null;
    isDisabled = false;

    @Input() id: string | null = null;
    @Input() name: string | null = null;
    @Input() placeholder = null;

    writeValue(obj: any): void {
        this.value = obj;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }


    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    onTouched: () => void = () => { return; };
    onChange: (value: string) => void = () => { return; };

    onInput(event: Event) {
      this.value = (event.target as HTMLInputElement).value;
      this.onChange(this.value);
      this.onTouched();
    }
}
