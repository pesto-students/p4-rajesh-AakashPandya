import { Box, Button, Grid, useMediaQuery, useTheme } from '@mui/material'

import { IURL } from 'interfaces/IURL'
import React from 'react'

interface IURLCardProps {
  url: IURL
  onCopyURL: (code: string) => {}
}

export const URLCard: React.FC<IURLCardProps> = React.memo(
  ({ url, onCopyURL }: IURLCardProps) => {
    const { code, original_link, short_link } = url

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    return (
      <Box
        component="div"
        sx={{
          p: 2,
          border: '1px solid grey',
          borderRadius: '10px',
          marginTop: '2px',
          boxShadow: '2px 1px',
          width: matches ? '40%' : 'unset',
        }}
        key={code}
      >
        <Grid container justifyContent="space-between">
          <Grid item xs={8}>
            {original_link}
          </Grid>
          <Grid item xs={4}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={4}>
                <Button variant="contained" onClick={() => onCopyURL(code)}>
                  copy
                </Button>
              </Grid>
              <Grid item>{short_link}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    )
  }
)
