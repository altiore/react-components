/// <reference types="react" />
import { Input as InputRaw } from './Input';
declare const Input: ({ input, label, showLabel, type, meta: { touched, error, warning }, styles, placeholder, inputClass, wrapperClass, icon, }: import("./Input").InputProps & import("../../node_modules/@types/redux-form/lib/Field").WrappedFieldProps) => JSX.Element | null;
export { Input, InputRaw };
