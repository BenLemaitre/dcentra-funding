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
  NumberInputField
} from '@chakra-ui/react'

const useFormField = (initialValue = '') => {
  const [value, setValue] = useState(initialValue)
  const onChange = useCallback(e => setValue(e.target.value), [])
  return { value, onChange }
}

const acceptedFileTypes = ['jpg', 'jpeg', 'png']

const Form = () => {
  const titleField = useFormField()
  const descriptionField = useFormField()
  const goalField = useFormField()
  const fileInputRef = useRef()
  const [buffer, setBuffer] = useState({})
  const [filename, setFilename] = useState('')

  const captureFile = e => {
    e.preventDefault()

    const file = e.target.files[0]
    const reader = new window.FileReader()

    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      setBuffer(reader.result)
      setFilename(file.name)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
        {/* Upload button */}
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={FiFile} />}
          />
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
        boxShadow="lg"
      >
        Submit
      </Button>
    </form>
  )
}

export default Form
