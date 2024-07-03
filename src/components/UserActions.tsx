import { Button } from './Button';

export const UserActions = () => {
  return (
    <div className="grid grid-flow-row gap-4 py-6 text-neutral-600 md:grid-cols-2 md:px-4 px-16">
      <Button title="View CV" />
      <Button title="Message" />
    </div>
  );
};
