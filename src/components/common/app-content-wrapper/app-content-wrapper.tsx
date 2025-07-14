import { Container } from "@mui/material";

interface AppContentWrapperProps {
  children: React.ReactNode;
}

const AppContentWrapper: React.FC<AppContentWrapperProps> = ({ children }) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "primary.main",
        minHeight: 'calc(100vh - 68px)',
        paddingBottom: '56px'
      }}
    >
      {children}
    </Container>
  );
};

export default AppContentWrapper;
