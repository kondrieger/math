<template>
    <div class="claim__wrap">
        <div class="container claim">
            <p class="claim__text">
                <b>Хотите убедиться, что курсы увлекательной математики — то, что нужно вашему ребенку?</b><br />
            </p>
            <p class="claim__text">Оставьте заявку на бесплатную консультацию</p>
            <a-button class="claim__btn" wide text="Оставить заявку" />
        </div>
    </div>
</template>

<script>
import AButton from '../../components/button/button.vue';

export default {
    components: { AButton },
};
</script>

<style>
.claim {
    padding-top: calc(var(--gs) * 7);
    padding-bottom: calc(var(--gs) * 7);
    text-align: center;

    @media (--tablet) {
        padding-top: calc(var(--gs) * 4);
        padding-bottom: calc(var(--gs) * 4);
    }

    &__wrap {
        background-color: var(--cl-dk-yellow);
        background-image: url('../../img/yellow_bg.png');
        background-size: 1914px 336px;
        background-repeat: no-repeat;
        background-position: center center;
    }

    &__text {
        font-size: 24px;
        max-width: 800px;
        margin: 0 auto;

        & + & {
            margin: calc(var(--gs) * 1.5) auto calc(var(--gs) * 3);

            @media (--tablet) {
                margin-bottom: calc(var(--gs) * 2);
            }
        }

        @media (--tablet) {
            font-size: 16px;
            font-size: 1.5;
        }
    }

    &__btn {
        font-size: 1.25rem;
        margin: 0 auto;

        @media (--tablet) {
            font-size: 15px;
            width: 239px;
        }
    }
}
</style>
