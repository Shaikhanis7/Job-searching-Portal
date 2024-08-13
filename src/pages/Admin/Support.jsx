import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Grid } from '@mui/material';
import { styled } from '@mui/system';

const FadeInBox = styled(Box)({
    animation: 'fadeIn 1.5s ease-in-out',
    '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
});

const SlideInLeftBox = styled(Box)({
    animation: 'slideInLeft 1.5s ease-in-out',
    '@keyframes slideInLeft': {
        '0%': { transform: 'translateX(-100%)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 },
    },
});

const SlideInRightBox = styled(Box)({
    animation: 'slideInRight 1.5s ease-in-out',
    '@keyframes slideInRight': {
        '0%': { transform: 'translateX(100%)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 },
    },
});

const PointSymbol = styled('span')({
    marginRight: '8px',
    color: '#1976d2', // Customize the color as needed
    fontSize: '1.2rem',
});

const SupportPage = () => {
    return (
        <Container>
            <FadeInBox mt={4} mb={6}>
                <Typography variant="h4" gutterBottom>
                    Admin Support Center
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Manage your platform efficiently with these guidelines and tools.
                </Typography>
            </FadeInBox>

            <SlideInLeftBox mb={6}>
                <Typography variant="h5" gutterBottom>
                    Administrative Guidelines
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary={
                                <>
                                    <PointSymbol>🔍</PointSymbol>
                                    Monitoring Job Postings
                                </>
                            }
                            secondary="Regularly review job postings to ensure they meet community standards. Remove any listings that are inappropriate or violate guidelines."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={
                                <>
                                    <PointSymbol>👥</PointSymbol>
                                    User Account Management
                                </>
                            }
                            secondary="Oversee user accounts, manage roles, and ensure compliance with platform policies. Deactivate or edit accounts as necessary."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={
                                <>
                                    <PointSymbol>📄</PointSymbol>
                                    Application Oversight
                                </>
                            }
                            secondary="Monitor the job application process, ensuring a smooth experience for both employers and job seekers. Address any issues promptly."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={
                                <>
                                    <PointSymbol>📊</PointSymbol>
                                    Reporting & Analytics
                                </>
                            }
                            secondary="Use the analytics dashboard to track platform activity. Generate reports to help in making informed decisions."
                        />
                    </ListItem>
                </List>
            </SlideInLeftBox>

            <SlideInRightBox mb={6}>
                <Typography variant="h5" gutterBottom>
                    Tips for Effective Management
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary={
                                <>
                                    <PointSymbol>🗂️</PointSymbol>
                                    Stay Organized
                                </>
                            }
                            secondary="Use task management tools to keep track of your duties. Prioritize tasks based on urgency and impact."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={
                                <>
                                    <PointSymbol>📞</PointSymbol>
                                    Communicate Clearly
                                </>
                            }
                            secondary="Ensure clear and timely communication with both users and your support team. This helps in resolving issues quickly."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={
                                <>
                                    <PointSymbol>🔄</PointSymbol>
                                    Stay Updated
                                </>
                            }
                            secondary="Keep up with the latest platform updates and policy changes to ensure you’re managing the platform effectively."
                        />
                    </ListItem>
                </List>
            </SlideInRightBox>

            <FadeInBox mb={6}>
                <Typography variant="h5" gutterBottom>
                    Quick Access Tools
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            <PointSymbol>👤</PointSymbol> User Management
                        </Typography>
                        <Typography variant="body1">
                            Quickly access the User Management tool to review user accounts, change roles, and manage permissions.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            <PointSymbol>📝</PointSymbol> Job Postings
                        </Typography>
                        <Typography variant="body1">
                            Access the Job Postings dashboard to review, approve, or remove job listings. Ensure all postings meet the platform's standards.
                        </Typography>
                    </Grid>
                </Grid>
            </FadeInBox>
        </Container>
    );
};

export default SupportPage;
