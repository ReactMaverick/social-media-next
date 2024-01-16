export default function EditProfilePage({ params }) {
    switch (params.editType) {
        case 'basic':
            return (
                <div>Edit page basic</div>
            );
        case 'work':
            return (
                <div>Edit page work</div>
            );
        case 'interests':
            return (
                <div>Edit page interests</div>
            );
        case 'settings':
            return (
                <div>Edit page settings</div>
            );
        case 'password':
            return (
                <div>Edit page password</div>
            );

        default:
            return (
                <div>Invalid Request</div>
            );
    }
};