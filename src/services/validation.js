export default ({ title, value, status = false }) => {
  const hasTitle = typeof title === 'string' && title.trim() !== '';
  const hasValue = typeof value === 'number';
  const hasStatus = typeof status === 'boolean';
  return hasTitle && hasValue && hasStatus;
};
