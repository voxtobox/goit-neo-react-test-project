import { useField } from 'formik';
import BaseInput from '../BaseInput/BaseInput';

export default function BaseFormikInput({ name, ...props }) {
  const [field] = useField(name); // Use Formik for input handler

  return (
    <div>
      <BaseInput
        {...field} // Pass Formik Props
        {...props} // Rest props
      />
    </div>
  );
}
