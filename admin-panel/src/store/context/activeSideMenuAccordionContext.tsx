import React, { createContext, useState } from "react";

interface ActiveSideMenuAccordionContextProps {
	activeSideMenuAccordion: number|string;
	setActiveSideMenuAccordion: React.Dispatch<React.SetStateAction<number|string>>;
}
interface prop {
	children: React.ReactNode;
}

export const ActiveSideMenuAccordionContext = createContext<ActiveSideMenuAccordionContextProps>({
	activeSideMenuAccordion: -1,
	setActiveSideMenuAccordion: () => { },
});

const ActiveSideMenuAccordionContextProvider: React.FC<prop> = (props) => {
	
	const [activeSideMenuAccordion, setActiveSideMenuAccordion] = useState<number|string>(-1);

	return (
		<ActiveSideMenuAccordionContext.Provider value={{
			activeSideMenuAccordion,
			setActiveSideMenuAccordion
		}}>
			{props.children}
		</ActiveSideMenuAccordionContext.Provider>
	);
};

export default ActiveSideMenuAccordionContextProvider;
