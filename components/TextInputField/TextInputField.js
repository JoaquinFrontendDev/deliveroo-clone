import { useField } from "formik"
import { useState } from "react"
import { TextInput, View, Text, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentUser, setIsEditing } from "../../slices/userSlice"


const TextInputField = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const currentUser = useSelector(selectCurrentUser)
  const [allowEdit, setAllowEdit] = useState(false)
  const dispatch = useDispatch()

  const onUserEditing = () => {
    setAllowEdit(!allowEdit)
    dispatch(setIsEditing(!currentUser.isEditing))
  }

  return (
    <View>
      {props.label && <Text className='text-sm text-gray-400 '>{props.label}</Text>}
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        value={field.value}
        editable={allowEdit}
        onBlur={() => setAllowEdit(false)}
        blurOnSubmit={true}
        className={`border-gray-300 border-b-2 pr-4 text-lg pb-2 focus:border-[#4EC0BB] ${ allowEdit && 'border-[#4EC0BB]' }`}
        {...props}
      />
      {props.isEditable && (
        <TouchableOpacity activeOpacity={0.9} className={`absolute right-0 bottom-2 ${ allowEdit ? 'bg-gray-300' : 'bg-[#4EC0BB]' }  p-1 rounded-md`} onPress={onUserEditing}>
          <Text className='text-white text-xs'>{`${ allowEdit ? 'Cancel' : 'Change' }`}</Text>
        </TouchableOpacity>
      )}
      <View>
        {meta.touched && meta.error && <Text className='text-md text-red-600 mt-1'>{meta.error}</Text>}
      </View>
    </View>
  )
}

export default TextInputField
