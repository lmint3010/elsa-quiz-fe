"use client";

import { Button } from "@/shared/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type CreateRoomFormProps = object;

type CreateRoomFormValues = z.infer<typeof createRoomFormSchema>;

export const createRoomFormSchema = z.object({
	playerName: z.string().nonempty({ message: "Player name is required" }),
});

export const CreateRoomForm: FC<CreateRoomFormProps> = () => {
	const router = useRouter();

	const form = useForm<CreateRoomFormValues>({
		resolver: zodResolver(createRoomFormSchema),
		defaultValues: {
			playerName: "",
		},
	});

	const onSubmit = (values: CreateRoomFormValues) => {
		const { playerName } = values;

		const randomRoomId = nanoid();

		const roomPath = `/rooms/${playerName}-${randomRoomId}`;

		router.push(roomPath);		
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex gap-3 items-end py-4"
			>
				<FormField
					control={form.control}
					name="playerName"
					render={({ field }) => (
						<FormItem className="grow">
							<FormLabel>Player Name</FormLabel>
							<FormControl>
								<Input
									{...field}
									type="text"
									placeholder="Ex. Justin Lu"
									className="grow"
								/>
							</FormControl>
							<FormMessage className="absolute" />
						</FormItem>
					)}
				/>
				<Button type="submit" className="px-12">
					Create Room
				</Button>
			</form>
		</Form>
	);
};
