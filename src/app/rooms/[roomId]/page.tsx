import type { FC } from "react";

export type RoomPageProps = object;

const RoomPage: FC<RoomPageProps> = () => {
	return (
		<div className="w-screen h-screen grid place-items-center">
			<div className="flex flex-col gap-3 text-center">
				<h1 className="font-medium text-2xl">Welcome to the room</h1>
				<div>Here is the Quiz content of the room</div>
			</div>
		</div>
	);
};

export default RoomPage;
