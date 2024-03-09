export default function Page({ params }: { params: { userId: string } }) {
	return <div>ユーザーID: {params.userId}</div>;
}

export const runtime = "edge";
