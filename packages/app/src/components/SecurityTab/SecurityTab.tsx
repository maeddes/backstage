/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import {
  TemplateContent,
  useGetCustomFields,
} from '@backstage/plugin-scaffolder';

interface SecurityTabProps {
  customExtensionsElement?: React.ReactNode;
}

export function SecurityTab({
  customExtensionsElement = <></>,
}: SecurityTabProps): JSX.Element | null {
  // eslint-disable-next-line no-alert
  const onComplete = async () => alert('success!!!!');

  const onError = (error: Error | undefined) => (
    <h2>{error?.message ?? 'Houston we have a problem.'}</h2>
  );

  const fieldExtensions = useGetCustomFields(customExtensionsElement);

  return (
    <TemplateContent
      namespace="default"
      templateName="docs-template"
      onComplete={onComplete}
      onError={onError}
      customFieldExtensions={fieldExtensions}
    />
  );
}
