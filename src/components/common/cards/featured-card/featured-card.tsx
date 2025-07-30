import { Box } from "@mui/material"

const FeaturedCard = ({ image, id }: { image: string, id: number }) => {
  return (
    <Box
      onClick={() => console.log(id)}
      sx={{
        width: 300,
        height: 456,
      }}
    >
      <img src= {image}  alt="" />
    </Box>
  )
}

export default FeaturedCard