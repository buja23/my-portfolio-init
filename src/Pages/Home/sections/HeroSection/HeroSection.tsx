import { Box, Container, Grid, Typography, styled } from "@mui/material"
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBackground";
import Typewriter from "../../../../components/Typewriter/Typewriter"
import Avatar from "../../../../assets/images/avatar.png"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CV from "../../../../assets/pdfs/Open.pdf"
import SplitText from "../../../../components/AnimationComponent/SpliteText";
import '../HeroSection/hero.css';

const HeroSection: React.FC = () => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "80%",
        border: `1px solid ${theme.palette.secondary.contrastText}`,
        borderRadius: "50%",
        position: "relative"
    }));

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        [theme.breakpoints.up('xs')]: {
            display: "block",
            padding: "20px",
            paddingTop: "100px",
            paddingBottom: "40px",
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            alignItems: "center",
            paddingTop: "100px",
            height: "100vh"
        },
    }));

    const handleDownload = () => {
        console.log("download")
        // Create a link element
        const link = document.createElement('a');
        link.href = CV
        link.download = 'example.pdf'; // Set the download attribute to specify the file name
        // Append the link to the body
        document.body.appendChild(link);
        // Trigger the click event
        link.click();
        // Remove the link from the body
        document.body.removeChild(link);
    };

    const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

    const handleEmail = () => {
        const emailAddress = 'example@example.com';
        const subject = 'Subject';
        const body = 'Hello! I saw your portfolio...';

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    }

    return (
        <>
            <StyledHero style={{ position: "relative", overflow: "hidden" }}>
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                        pointerEvents: "none",
                    }}
                >
                    <AnimatedBackground />
                </Box>
                {/* Conteúdo principal acima */}
                <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                    <Grid container spacing={2} sx={{ position: "relative", zIndex: 1 }}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative" pb={3}>
                                <Box textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                              <SplitText
                                    text="Victor Azambuja"
                                    className="text-2xl"
                                    delay={100}
                                    duration={0.6}
                                    ease="power3.out"
                                    splitType="chars"
                                    from={{ opacity: 0, y: 40 }}
                                    to={{ opacity: 1, y: 0 }}
                                    threshold={0.1}
                                    rootMargin="-100px"
                                    textAlign="center"
                                    onLetterAnimationComplete={handleAnimationComplete}
                                    variant="h1" color="primary.contrastText"
                                />
                            <Typewriter text="Estudante de Análise e Desenvolvimento de Sistemas" delay={120} variant="h2" color="primary.contrastText" />
                            <Box mt={3}>
                                <Grid container spacing={3} display="flex" justifyContent="center">
                                    <Grid item xs={10} md={4}>
                                        <StyledButton onClick={() => handleDownload()}>
                                            <DownloadIcon />
                                            <Typography>
                                                Baixar Curriculo
                                            </Typography>
                                        </StyledButton>
                                    </Grid>
                                    <Grid item xs={10} md={4}>
                                        <StyledButton onClick={() => handleEmail()}>
                                            <EmailIcon />
                                            <Typography>
                                                Contatos
                                            </Typography>
                                        </StyledButton>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default HeroSection

