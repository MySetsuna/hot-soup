import { ReactNode, useState } from 'react';

type Member = {
	id: string;
	firstName: string;
	lastName: string;
	title: string;
	imgUrl: string;
	webUrl: string;
	age: number;
	bio: string;
	/****** 有 100 个字段 ******/
};
const Summary = ({
	imgUrl,
	webUrl,
	header
}: {
	imgUrl: string;
	webUrl: string;
	header: string;
}) => {
	/*** 包括 "随机样式特性" ***/
	return (
		<>
			<img src={imgUrl} />
			<a href={webUrl}>{header}</a>
		</>
	);
};

const SeeMore = ({ componentToShow }: { componentToShow: ReactNode }) => {
	const [seeMore, setSeeMore] = useState<boolean>(false);
	return (
		<>
			<button onClick={() => setSeeMore(!seeMore)}>
				See {seeMore ? 'less' : 'more'}
			</button>
			{seeMore && <>{componentToShow}</>}
		</>
	);
};

const MemberCard = ({ id = 'default' }: { id?: string }) => {
	const { title, firstName, lastName, webUrl, imgUrl, age, bio } =
		useMember(id);
	const header = `${title}. ${firstName} ${lastName}`;
	return (
		<>
			<Summary {...{ imgUrl, webUrl, header }} />
			<SeeMore
				componentToShow={
					<>
						AGE: {age} | BIO: {bio}
					</>
				}
			/>
		</>
	);
};
function useMember(id: string): Member {
	return {
		id,
		title: '111',
		firstName: '111',
		lastName: '111',
		webUrl: '111',
		imgUrl: '111',
		age: 99,
		bio: '111'
	};
}
export default MemberCard;
