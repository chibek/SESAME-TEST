import React from 'react'
import {ButtonTypes} from '../../../enums/generic/button-types'
const Button = (props,className) => {
    const classNames = [props.className,'rounded-full','focus:outline-none'];
	const styles = {
		[ButtonTypes.PRIMARY]: [
			'text-white',
			'bg-primary',
			'hover:bg-primary-hover',
			'dark:bg-primary-dark',
			'dark:hover:bg-primary-darkhover'
		],
		[ButtonTypes.SECONDARY]: ['text-white', 'bg-secondary', 'dark:bg-secondary-dark', 'dark:hover:bg-secondary-darkhover', 'hover:bg-secondary-hover'],
		[ButtonTypes.TERTIARY]: ['text-white', 'bg-tertiary', 'hover:bg-tertiary-hover'],
	};
    classNames.push(...styles[props.kind]);
	className && classNames.push(className);
	className = classNames.join(' ');

    return(
    <button onClick={props.onClick} className={className}>{props.children}</button>
    )
}

export default Button;