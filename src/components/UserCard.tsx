import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useGitHub } from '../context/Githubusercontext';

function UserCard() {
  const { userdata } = useGitHub();

  if (!userdata) return null; 

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        mt: 4,
      }}
    >
      <Card
        sx={{
          width: 320,
          borderRadius: 4,
          boxShadow: 6,
          backgroundColor: '#f5f5f5',
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={userdata.avatar_url || 'https://via.placeholder.com/200'}
          alt={userdata.name || 'GitHub user avatar'}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {userdata.name || 'No Name'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Followers:</strong> {userdata.followers} &nbsp;&nbsp;
            <strong>Following:</strong> {userdata.following}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            <strong>Public Repos:</strong> {userdata.public_repos}
          </Typography>
          {userdata.bio && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              <strong>Bio:</strong> {userdata.bio}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default UserCard;
