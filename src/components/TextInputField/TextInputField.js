import { useField } from "formik"
import { TextInput, View, Text } from "react-native"


const TextInputField = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)

  return (
    <View>
      {props.label && <Text className='text-sm text-gray-400 '>{props.label}</Text>}
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        value={field.value}
        className='border-gray-300 border-b-2 pr-4 text-lg pb-2 focus:border-[#4EC0BB]'
        {...props}
      />
      <View>
        {meta.touched && meta.error && <Text className='text-md text-red-600 mt-1'>{meta.error}</Text>}
      </View>
    </View>
  )
}

export default TextInputField
