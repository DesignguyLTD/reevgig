import React from 'react';
import Profile from "./Profile";
import ProfileSave from "./profileSave";

const ProfileMain = () => {
    const [page, setPage] = React.useState<number>(1);
    return (
        <div>
            {page === 1 && <Profile page={page} setPage={setPage}/>}
            {page === 2 && <ProfileSave page={page} setPage={setPage}/>}
        </div>
    );
};

export default ProfileMain;