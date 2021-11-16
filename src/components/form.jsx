import { useState, useCallback, useRef } from 'react'
import { FiFile } from 'react-icons/fi'
import {
  Stack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Button,
  Textarea,
  NumberInput,
  NumberInputField,
  Select
} from '@chakra-ui/react'

const useFormField = (initialValue = '') => {
  const [value, setValue] = useState(initialValue)
  const onChange = useCallback(e => setValue(e.target.value), [])
  return { value, onChange }
}

const acceptedFileTypes = ['jpg', 'jpeg', 'png']
const categories = [
  'education',
  'medical',
  'memorial',
  'emergency',
  'non-profit',
  'animals'
]

const Form = ({ handleSubmit, captureFile, filename, loading }) => {
  const titleField = useFormField()
  const descriptionField = useFormField()
  const goalField = useFormField()
  const categoryField = useFormField()
  const fileInputRef = useRef()

  return (
    <form
      onSubmit={e =>
        handleSubmit(e, {
          title: titleField.value,
          desc: descriptionField.value,
          category: categoryField.value,
          goal: goalField.value
        })
      }
    >
      <Stack spacing={4}>
        {/* Title */}
        <Input placeholder="Title" required {...titleField} />
        {/* Description */}
        <Textarea
          placeholder="Describe your project in a few words..."
          size="sm"
          required
          borderRadius="md"
          {...descriptionField}
        />
        {/* Goal in ETH */}
        <Stack
          direction={'row'}
          spacing={4}
          align="center"
          justify="space-between"
        >
          <Text>Your Goal (ETH):</Text>
          <NumberInput precision={2}>
            <NumberInputField required {...goalField} />
          </NumberInput>
        </Stack>
        {/* Category */}
        <Select {...categoryField}>
          {categories.map((category, key) => (
            <option key={key} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </Select>
        {/* Upload button */}
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={FiFile} />
          </InputLeftElement>
          <input
            type="file"
            accept={acceptedFileTypes}
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={captureFile}
          />
          <Input
            as={Button}
            boxShadow="lg"
            fontFamily={'heading'}
            onClick={() => fileInputRef.current.click()}
          >
            Upload File
          </Input>
        </InputGroup>
        {filename.length > 0 ? <Text>{filename}</Text> : <span />}
      </Stack>
      {/* Submit */}
      <Button
        type="submit"
        fontFamily={'heading'}
        mt={8}
        w={'full'}
        colorScheme="whatsapp"
        boxShadow="lg"
        isLoading={loading}
        loadingText="Submitting"
        spinnerPlacement="start"
      >
        Submit
      </Button>
    </form>
  )
}

export default Form
