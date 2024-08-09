interface tagType {
    isActive: boolean;
    content: string;
}

export  const tagData  :tagType[] = [
    { isActive: false, content: 'Hardware' },
    { isActive: false, content: 'Simulation' },
    { isActive: false, content: 'Robotics/Embedded' },
    { isActive: false, content: 'Consultancy' },
    { isActive: false, content: 'IoT Devices' },
    { isActive: false, content: 'Circuit Design' },
    { isActive: false, content: 'PCB Design' },
    { isActive: false, content: 'Prototyping' },
    { isActive: false, content: '3D Printing' },
    { isActive: false, content: 'FPGA Development' },
    { isActive: false, content: 'Sensor Integration' },
    { isActive: false, content: 'Automotive Electronics' },
    { isActive: false, content: 'Industrial Automation' },
    { isActive: false, content: 'Power Electronics' },
    { isActive: false, content: 'Embedded Software' },
    { isActive: false, content: 'Networking Hardware' },
];

interface experienceType {
    value: string;
    label: string;

}

export const Experience: experienceType[] = [
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Expert', label: 'Expert' },

];


export  const recommendedLanguages:string[] = [
    'English', 'French', 'Spanish', 'Dutch', 'German',
    'Mandarin', 'Russian', 'Vietnamese', 'Japanese', 'Arabic'
];

export  const recommendedSkills :string[] = [
    'Python', 'HTML', 'PHP', 'C++', 'Engineering', 'Frontend',
    'Backend', '3D Modelling', 'Arduino', 'Vue.js'
];