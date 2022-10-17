import { Button, Grid, Typography } from '@mui/material'

import { IURL } from 'interfaces/IURL'
import TextField from '@mui/material/TextField'
import URLList from 'components/URLList'
import urlService from 'services/urlService'
import { useState } from 'react'

const Home = () => {
  const [currentURL, setCurrentURL] = useState('')
  const [urlList, setURLList] = useState<IURL[]>([])

  const handleOnShortenButtonClick = async () => {
    const { data } = await urlService.shortenURL(currentURL)
    setURLList((list: any) => [...list, data.result])
    setCurrentURL('')
  }

  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        alignContent="center"
        sx={{ marginTop: '70px', marginLeft: '2px', marginRight: '2px' }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            More than just shorten Links
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="subtitle1" gutterBottom>
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField
                id="url"
                value={currentURL}
                label="Shorten a link here..."
                variant="filled"
                onChange={(e) => setCurrentURL(e.target.value)}
                size="medium"
                sx={{ width: '100%' }}
              />
            </Grid>

            <Grid item xs={3}>
              <Button onClick={handleOnShortenButtonClick} variant="contained">
                Shorten
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <URLList list={urlList} />
    </>
  )
}

export default Home
