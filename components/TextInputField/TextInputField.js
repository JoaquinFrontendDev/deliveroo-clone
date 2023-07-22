import { useField } from "formik"
import { TextInput, View, Text } from "react-native"

const TextInputField = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        value={field.value}
        className='border-gray-300 border-b pr-4 text-xl py-1 focus:border-[#4EC0BB]'
        {...props}
      />
      <View>
        {meta.touched && meta.error && <Text className='text-md text-red-600 mt-1'>{meta.error}</Text>}
      </View>
    </>
  )
}

export default TextInputField
