import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400 + 'px',
    height: 300 + 'px',
    bgcolor: 'wheat',
    boxShadow: 24,
    p: 4,
};

const CustomModal = (props) => {
    const { open, handleClose, player, coach } = props;

    const playerDateBirth = new Date(player?.birthDate);
    const coachDateBirth = new Date(coach?.birthDate);

    return (
        <div>
            {player && (
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ marginBottom: '5px', textAlign: 'center' }}>
                            {player.name}
                        </Typography>
                        <Box style={{ display: 'flex', flexDirection: 'row' }}>
                            <img src={player.pictureUrl} style={{ width: '175px', height: '225px' }} alt="player" />
                            <Box style={{ margin: '0 auto', marginTop: '20px' }}>
                                <Typography>Team: {player.idTeam}</Typography>
                                <Typography>Number: {player.jerseyNum}</Typography>
                                <Typography>Birth: {`${playerDateBirth.getDate()} - ${playerDateBirth.getMonth() + 1} - ${playerDateBirth.getFullYear()}`}</Typography>
                                <Typography>Position: {player.position}</Typography>
                                <Typography>Weight: {player.weight}</Typography>
                                <Typography>Height: {player.height}</Typography>
                                <Typography>Goal: {player.goal}</Typography>
                                <Typography>Assist: {player.assist}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Modal>
            )}

            {coach && (
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ marginBottom: '5px', textAlign: 'center' }}>
                            {coach.name}
                        </Typography>
                        <Box style={{ display: 'flex', flexDirection: 'row' }}>
                            <img src={coach.pictureUrl} style={{ width: '175px', height: '225px' }} alt="coach" />
                            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography>Team: {coach.idTeam}</Typography>
                                <Typography>Birth: {`${coachDateBirth.getDate()} - ${coachDateBirth.getMonth() + 1} - ${coachDateBirth.getFullYear()}`}</Typography>
                            </Box>
                        </Box>
                    </Box>

                </Modal>
            )}
        </div>
    );
}

export default CustomModal;
