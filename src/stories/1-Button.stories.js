import React from 'react';
import { Button } from '@storybook/react/demo';
import { withPerformance } from 'storybook-addon-performance';

export default {
  title: 'Button',
  component: Button,
  decorators: [withPerformance],
};

export const Emoji = () => {
  const [show, setShow ] = React.useState();

  return (
    <Button onClick={() => setShow(!show)}>
      {show && <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>}
      Click me to show / hide Emoji
    </Button>
)};
