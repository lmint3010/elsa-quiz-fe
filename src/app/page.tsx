import { CreateRoomForm } from "@/features/create-room/ui/create-room-form";

export default function Home() {
	return (
		<div className="w-screen h-screen grid place-items-center bg-slate-50">
			<div className="border border-slate-200 rounded-2xl p-8 max-w-prose text-slate-700 bg-white/60 backdrop-blur">
				<h1 className="font-semibold text-2xl">Start Playing</h1>
				<p className="font-normal mb-3">
					Create a new quiz room and share the room code with your friends to
					start playing.
				</p>
				<CreateRoomForm />
			</div>
		</div>
	);
}
