import React from 'react';
import { Typography, Link } from '@mui/material';
import type {
	DefaultComponentProps,
	OverridableTypeMap
} from '@mui/material/OverridableComponent';
function Copyright (props: DefaultComponentProps<OverridableTypeMap>) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{'Copyright © '}
			<Link color="inherit" href="https://MySetsuna.github.io/hot-soup">
				💓https://MySetsuna.github.io/hot-soup
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}
export default Copyright;
