import React, { useState } from 'react';
import { ReviewFormProps } from './ReviewForm.props';

import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import CloseIcon from './close.svg';
import { Controller, useForm } from 'react-hook-form';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import axios from 'axios';
import { API } from '../../helpers/api';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
  // registr - задает имя поля
  // control - значение для управляемых элементов
  // handleSubmit - выполняет функцию при отправки формы
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, {
        ...formData,
        productId,
      });

      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError('Что-то пошло не так');
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        {/* Не усправляемые элементы */}
        <Input
          {...register('name', { required: { value: true, message: 'Заполните имя' } })}
          placeholder="Имя"
          error={errors.name}
        />
        <Input
          {...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
          placeholder="Заголовок отзыва"
          className={styles.title}
          error={errors.title}
        />

        <div className={styles.rating}>
          <span>Оценка:</span>

          {/* Управляемый элмент */}
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: 'Добавьте оценку' } }}
            render={({ field }) => (
              <Rating
                isEdited
                rating={field.value}
                ref={field.ref}
                setRating={field.onChange}
                error={errors.rating}
              />
            )}
          />
        </div>

        <Textarea
          {...register('description', {
            required: { value: true, message: 'Заполните отзыв' },
          })}
          placeholder="Текст отзыва"
          className={styles.description}
          error={errors.description}
        />

        <div className={styles.submit}>
          <Button appearance="primary">отправить</Button>

          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и проверку
          </span>
        </div>
      </div>

      {isSuccess && (
        <div className={cn(styles.success, styles.panel)}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>

          <div>Спасибо, Ваш отзыв будет опублиокван после проверки</div>

          <CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
        </div>
      )}

      {error && (
        <div className={cn(styles.error, styles.panel)}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          Что-то пошло не так, попробуйте обновить страницу
          <CloseIcon className={styles.close} onClick={() => setError('')} />
        </div>
      )}
    </form>
  );
};
