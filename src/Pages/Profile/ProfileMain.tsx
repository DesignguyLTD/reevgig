import React from 'react';
import Profile from "./Profile";
import ProfileSave from "./profileSave";

interface ProfileMainProps {
    userType: string;

}

const ProfileMain = ({userType}: ProfileMainProps) => {
    const [page, setPage] = React.useState<number>(1);
    return (
        <div>
            {page === 1 && <Profile userType={userType} page={page} setPage={setPage}/>}
            {page === 2 && <ProfileSave userType={userType} page={page} setPage={setPage}/>}
        </div>
    );
};

export default ProfileMain;