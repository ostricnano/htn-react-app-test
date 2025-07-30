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
        minHeight: 'calc(100vh - 4.6875rem)',
        paddingLeft: '0px !important',
        paddingRight: '0px !important',
        paddingBottom: '56px'
      }}
    >
      {children}
    </Container>
  );
};

export default AppContentWrapper;
