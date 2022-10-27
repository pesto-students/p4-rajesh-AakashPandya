import { Grid } from '@mui/material'
import { IURL } from 'interfaces/IURL'
import { URLCard } from 'components/URLCard'
import { copyToClipBoard } from 'helper'
import { toast } from 'react-toastify'
import { useCallback } from 'react'

interface IURLProps {
  list: IURL[]
}

const URLList: React.FC<IURLProps> = ({ list }: IURLProps) => {
  const handleCopyURL = useCallback(
    async (code: string) => {
      await copyToClipBoard(
        list.filter((url: IURL) => url.code === code)[0].short_link
      )
      toast.success('Short URL has been copied to the clipboard')
    },
    [list]
  )

  return (
    <Grid
      container
      direction="column"
      alignContent="center"
      sx={{ marginTop: '5px' }}
    >
      {list?.map((url) => {
        return <URLCard url={url} onCopyURL={handleCopyURL} />
      })}
    </Grid>
  )
}

export default URLList
